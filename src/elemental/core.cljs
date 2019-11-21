(ns elemental.core
  (:require [reagent.core :as reagent :refer [atom]]))

(let [fps 60]
  (def update-interval (/ 1000 fps)))

(def width 800)
(def height 600)
(def debug? false)

(def initial-db {:pressed-keys #{}
                 :loop {:time 0 :delta 0}
                 :player {:x 100 :y 100}})

(defonce db (atom initial-db))

(defn view []
  (let [{:keys [player] :as db} @db]
    [:div
     [:pre (pr-str db)]
     [:svg {:style {:width width :height height :background-color "#0d1b2a"}
            :view-box (str "0 0" width " " height)}
      [:circle {:fill "#415a77"
                :r 10
                :cx (:x player)
                :cy (:y player)}]]]))

(defn update-state
  "Returns new version of app-db
  d represents how long it has been since the previous update."
  [{:keys [pressed-keys] :as db} d]
  (-> db
      (update-in [:player :x]
                 #(cond (pressed-keys :right) (+ % d)
                        (pressed-keys :left)  (- % d)
                        :else %))
      (update-in [:player :y]
                 #(cond (pressed-keys :up)   (- % d)
                        (pressed-keys :down) (+ % d)
                        :else %))))

(comment
  ;; Here you can try your update-state function from the repl:

  (update-state initial-db 0)
  ;; => {:pressed-keys #{}, :loop {:time 0, :delta 0}, :player {:x 100, :y 100}}

  (:player (update-state (assoc initial-db :pressed-keys #{:right}) 10))
  ;; => {:x 103, :y 100}

  (:player (update-state (assoc initial-db :pressed-keys #{:right :up}) 100))
  ;; => {:x 130, :y 70}
  )



(defn game-loop []
  (js/window.requestAnimationFrame game-loop)
  (let [current-time (.getTime (js/Date.))
        delta (- current-time (get-in @db [:loop :time]))
        _ (swap! db assoc-in [:loop :delta] delta)]
    (when (> delta update-interval)
      (swap! db assoc-in [:loop :time] current-time)
      ;; this handles the game's update logic
      (swap! db update-state (/ delta update-interval)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; hook keypresses
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [code->key {68 :right 65 :left 87 :up 83 :down ;; wasd
                 39 :right 37 :left 38 :up 40 :down ;; arrow keys
                 32 :space}]
  (defn handle-key [edit-fn event]
    (let [kc (.-keyCode event)]
      (when-let [k (code->key kc)]
        (.preventDefault event)
        (js/console.log (pr-str k))
        (swap! db update :pressed-keys edit-fn k)))))


(def kd-hook (fn [e] (handle-key conj e)))
(def ku-hook (fn [e] (handle-key disj e)))

(defn hook-pressed-keys! []
  (js/window.addEventListener "keydown" kd-hook false)
  (js/window.addEventListener "keyup" ku-hook false))

(defn unhook-pressed-keys! []
  (js/window.removeEventListener "keydown" kd-hook false)
  (js/window.removeEventListener "keyup" ku-hook false))

(defn ^:export init []
  ;; handle key presses
  (hook-pressed-keys!)
  ;; render the app
  (reagent/render-component [view] (. js/document (getElementById "app")))
  (game-loop))

(defn stop [])

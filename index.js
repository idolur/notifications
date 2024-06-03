document.addEventListener("DOMContentLoaded", function(){
    const notifications=document.querySelectorAll(".notification");

    notifications.forEach(notification => {
        notification.addEventListener("click", function() {
            const dot=this.querySelector(".dot");
            if(dot) {
                dot.remove();
            }
        })
    })
})
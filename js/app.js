!function modal() {
    
    const btnOpenModal = document.querySelector(".btn-open-modal"),
    btnCloseModal = document.querySelector(".btn-close-modal");
    
    const waveHand = handSelector => {
        const hand = document.querySelector(handSelector),
        waveAnim = new TimelineMax({});
    
        waveAnim.set(hand, {
            transformOrigin: "bottom center"
        });
        waveAnim.delay(.5);
    
        waveAnim.from(hand, .5, {
            scale: .5,
            opacity: 0,
            ease: Back.easeOut.config(1.5)
        });
        waveAnim.to(hand, .2, {rotation: -15});
        waveAnim.to(hand, .2, {rotation: 15});
        waveAnim.to(hand, .2, {rotation: -15});
        waveAnim.to(hand, .2, {rotation: 15});
        waveAnim.to(hand, .2, {rotation: 0});
    }
    
    btnOpenModal.addEventListener("click", () => {
        document.body.classList.add("modal-is-opened");
        waveHand(".hand-wave");
    });
    
    btnCloseModal.addEventListener("click", () => {
        document.body.classList.remove("modal-is-opened");
    });

}();
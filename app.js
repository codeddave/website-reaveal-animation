let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-one",
    start: "top",
    end: "100%",
    scrub: true,
    pin: true,
  },
});

tl.fromTo(".page-one", { clipPath: "circle(5%)" }, { clipPath: "circle(75%)" });

tl.fromTo(".music-note", { scale: 0.5 }, { scale: 0, opacity: 0 });
tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".sub-title", { opacity: 0 }, { opacity: 1 });

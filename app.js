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

tl.fromTo(".intro-text", { opacity: 0 }, { opacity: 1 });

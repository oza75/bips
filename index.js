// const Bip = window.Bip;

new Tour()
  .add({x: 250, y: 300, title: "Tour 1", description: "Description de la tour 1"})
  .add({
    x: 500,
    y: 400,
    title: "Tour 1",
    position: "right",
    description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos fugiat possimus repellat tempore. Asperiores, autem commodi delectus fuga ipsam nihil nulla perspiciatis quam unde voluptate? Fuga magni sint sunt.\n"
  })
  .add({
    selector: "#hello-feature",
    position: "top",
    color: "cyan",
    title: "Bonjour",
    description: "Description de la tour bonjour"
  })
  .on(TourEvents.NAVIGATE_PREV, function () {
    console.log('prev')
  })
  .play();

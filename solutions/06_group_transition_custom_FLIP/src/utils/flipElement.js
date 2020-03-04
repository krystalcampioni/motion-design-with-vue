const flipElement = async ({
  element,
  triggerAction,
  duration = 300,
  initialZindex = 1,
  finalZindex = 1,
  finishedHandler = () => {}
}) => {
  const elm = element;
  // https://css-tricks.com/animating-layouts-with-the-flip-technique/
  // First: get the current bounds
  const first = elm.getBoundingClientRect();

  // execute the script that causes layout change
  await triggerAction();

  // Last: get the final bounds
  const last = elm.getBoundingClientRect();

  // Invert: determine the delta between the
  // first and last bounds to invert the element
  const deltaX = first.left - last.left;
  const deltaY = first.top - last.top;
  const deltaW = first.width / last.width;
  const deltaH = first.height / last.height;

  // Play: animate the final element from its first bounds
  // to its last bounds (which is no transform)

  const animation = elm.animate(
    [
      {
        zIndex: initialZindex,
        transformOrigin: "top left",
        transform: `
  translate(${deltaX}px, ${deltaY}px)
  scale(${deltaW}, ${deltaH})
`
      },
      {
        zIndex: finalZindex,
        transformOrigin: "top left",
        transform: "none"
      }
    ],
    {
      duration,
      easing: "ease-in-out",
      fill: "none"
    }
  );
  animation.onfinish = finishedHandler;
  return animation;
};

export default flipElement;

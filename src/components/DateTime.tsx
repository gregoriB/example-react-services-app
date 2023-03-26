/**
 * This component only exists to demonstrate that it
 * does not rerender when state stored in providers observables
 * is updated.
 */
const DateTime = () => {
  return (
    <>
      Datetime that doesn't change: {Date.now()}
      <br />
      <br />
    </>
  );
};

export default DateTime;

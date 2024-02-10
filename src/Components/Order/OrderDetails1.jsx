import Card1 from "../Cards/Card1";

const OrderDetails1 = () => {
  return (
    <div className='order-details-1'>
      <h2>Wanna enjoy some soulful food?</h2>
      <h3>
        No problems , we got you covered! Here are the three ways to enjoy the
        perfect meal you crave{" "}
      </h3>
      <div className='od-card-holder'>
        <Card1 title='Dine In' />
        <Card1 title='Takeaway' />
        <Card1 title='Delivery' />
      </div>
    </div>
  );
};

export default OrderDetails1;

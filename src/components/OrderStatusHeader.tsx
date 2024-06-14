import { Order } from "@/types";
import { ORDER_STATUS } from "@/config/order-status-config";
import { Progress } from "@/components/ui/progress";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return (hours > 12) ? `${hours - 12}:${paddedMinutes} pm` : `${hours}:${paddedMinutes} am`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between font-poppins">
        <span> <span className="text-purple-600">Order Status:</span> {getOrderStatusInfo().label}</span>
        <span className="text-2xl"> <span className="text-red-600">Expected by:</span> {getExpectedDelivery()}</span>
      </h1>
      <Progress
        className="animate-pulse border-2 border-gray-400 "
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;

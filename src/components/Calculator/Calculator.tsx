import { Card } from 'antd';
import { FC } from 'react';

interface ICalculator {
  title: string;
  quantity: string | number | undefined;
  subtitle: string;
  quantityViews: string | number | undefined;
  footer: string;
}

const Calculator: FC<ICalculator> = ({
  title,
  quantity,
  subtitle,
  quantityViews,
  footer,
}) => {
  return (
    <>
      <Card className="flex min-w-[283px] items-center justify-center rounded-2xl bg-gradient-to-tl from-gray-100 via-gray-200 to-gray-50 transition-all hover:scale-110 hover:shadow-lg">
        <div className="flex border-b border-gray-300 pb-4">{title}</div>
        <div className="mb-6 mt-6 flex items-center justify-center text-[40px] font-extralight leading-[48px]">
          {quantity}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-1 text-[12px] font-bold leading-[15px] text-gray-500">
            {subtitle}
          </div>
          <div className="text-[16px] font-extralight leading-[19px]">
            {quantityViews}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center border-t border-gray-300 pt-4 text-[12px] leading-[15px]">
          {footer}
        </div>
      </Card>
    </>
  );
};

export default Calculator;

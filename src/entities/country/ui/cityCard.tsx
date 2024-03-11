/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import { Card, CardContent } from "@/shared/ui";
import { City } from "..";
type CityCardProps = {
  city: City;
  onClick?: () => void;
};
export const CityCard = (props: CityCardProps) => {
  const { city, onClick } = props;
  return (
    <Card className="border-none rounded-none">
      <CardContent className="py-2 hover:bg-slate-400">
        <div onClick={onClick} className="flex items-center cursor-pointer ">
          <div>{city?.name.ru}</div>
        </div>
      </CardContent>
    </Card>
  );
};
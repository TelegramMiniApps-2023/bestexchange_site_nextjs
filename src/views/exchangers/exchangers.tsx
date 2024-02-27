import { Metadata } from "next";
import { ExchangersList } from "@/widgets/exchangersList";
import { getExchangers } from "@/entities/exchanger";
import styles from "./exchangers.module.scss";

// export async function generateMetadata({
//   params,
// }: {
//   params: { direction: string };
// }): Promise<Metadata> {
//   const direction = params.direction;
//   // тут мб будет запрос на контент по этому направлению (хз как пока)
//   const directionContent = await getContent(direction);

//   return {
//     title: directionContent.title,
//     description: directionContent.description,
//   };
// }

export const Exchangers = async ({
  params,
}: {
  params: { direction: string };
}) => {
  // извлечение значений валют из пути
  const currencies = params.direction.split("-to-");
  const from = currencies[0];
  const to = currencies[1];
  const exchangers = await getExchangers({ from, to });

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>EXCHANGERS PAGE</h1>
        <p className={styles.description}>
          ЗДЕСЬ БУДЕТ КОНТЕНТ КОТОРЫЙ ЗАВИСИТ ОТ КОНКРЕТНОГО НАПРАВЛЕНИЯ {from}{" "}
          И {to}
        </p>
      </div>
      {exchangers.length > 0 ? (
        <ExchangersList exchangers={exchangers} />
      ) : (
        <h3 className={styles.error}>
          Нет обменников с данным направлением :(
        </h3>
      )}
    </section>
  );
};

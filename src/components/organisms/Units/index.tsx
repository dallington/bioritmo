/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
import React from "react";
import styled from "styled-components";

type TUnitShedules = {
  [key: string]: string;
};

type TUnitShedulesA = {
  [key: string]: string[];
};
type TUnit = {
  id: number;
  title: string;
  content: string;
  opened?: boolean;
  mask: string;
  towel: string;
  fountain: string;
  // eslint-disable-next-line camelcase
  locker_room: string;
  schedules: TUnitShedules[];
};

type TUnits = {
  data: Array<TUnit>;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  border: 8px solid #ededed;
  padding: 40px;
`;

const CardUnit = styled(Card)`
  padding: 5px;
  background: #ccc;
  border: 0px;
  padding: 20px;
  border-radius: 5px;
  flex: 0 1 100%;
  max-width: 28%;
`;

const DeckCardsUnit = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const ScheduleDays = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    flex: 0 1 50%;
  }
`;
// TODO: change dangerouslySetInnerHTML to sanitize and parser react

function getKeyByValue(object: any, value: string) {
  return Object.keys(object).find((key) => {
    return object[key].weekdays === value;
  });
}

export default function Units({ data }: TUnits) {
  const groupSchedules = (arr: TUnitShedules[]) => {
    const schedulesGroup: any = [];
    arr.forEach((item: any) => {
      const found = getKeyByValue(schedulesGroup, item.weekdays);
      if (found === undefined) {
        schedulesGroup.push({
          weekdays: item.weekdays,
          hour: [item.hour],
        });
      } else {
        schedulesGroup[found].hour.push(item.hour);
      }
    });

    return schedulesGroup;
  };
  return (
    <DeckCardsUnit>
      {data.map((unit: TUnit) => {
        const { content, schedules } = unit;
        const schedulesGroup = schedules?.length
          ? groupSchedules(schedules)
          : [];
        return (
          <CardUnit key={unit.id}>
            <p>{unit?.opened && unit.opened === true ? "Aberto" : "Fechado"}</p>
            <h2 dangerouslySetInnerHTML={{ __html: unit.title }} />
            <p dangerouslySetInnerHTML={{ __html: content }} />
            {schedulesGroup && (
              <ScheduleDays>
                {schedulesGroup.map((item: any, index: number) => {
                  return (
                    <div key={index}>
                      <h3>{item.weekdays}</h3>
                      {item.hour.map((hour: string, indexx: number) => {
                        return <p key={indexx}>{hour}</p>;
                      })}
                    </div>
                  );
                })}
              </ScheduleDays>
            )}
          </CardUnit>
        );
      })}
    </DeckCardsUnit>
  );
}

import React from "react";
import styled from "styled-components";

import Flex from "../../atoms/Flex";
import Icon from "../../atoms/Icon";

const LegendBox = styled.div`
  background: #f5f5f5;
  padding: 30px 15px;
`;

const FlexItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    flex: 1;
    text-align: center;
  }
`;

const IconList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const TitleReference = styled.h3`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colors.grey.dark || "#000"};
  margin: 0;
  margin-bottom: 40px; ;
`;
const ImagesIcon = {
  "forbidden-fountain": {
    text: "",
    image: "forbidden-fountain.png",
  },
  "forbidden-lockerroom": {
    text: "",
    image: "forbidden-lockerroom.png",
  },
  "partial-fountain": {
    text: "",
    image: "partial-fountain.png",
  },
  "partial-lockerroom": {
    text: "",
    image: "partial-lockerroom.png",
  },
  "recommended-mask": {
    text: "",
    image: "recommended-mask.png",
  },
  "recommended-towel": {
    text: "",
    image: "recommended-mask.png",
  },
  "required-lockerroom": {
    text: "",
    image: "required-lockerroom.png",
  },
  "required-mask": {
    text: "",
    image: "required-mask.png",
  },
  "required-towel": {
    text: "",
    image: "required-towel.png",
  },
};
interface Map {
  [key: string]: {
    title: string;
    icons: {
      [key: string]: string;
    };
  };
}

const Legends: Map = {
  mask: {
    title: "Máscara",
    icons: {
      required: "required-mask.png",
      recommended: "recommended-mask.png",
    },
  },
  towel: {
    title: "Toalha",
    icons: {
      required: "required-towel.png",
      recommended: "recommended-towel.png",
    },
  },
  fountain: {
    title: "Bebedouro",
    icons: {
      partial: "partial-fountain.png",
      forbidden: "forbidden-fountain.png",
    },
  },
  lockerroom: {
    title: "Vestiários",
    icons: {
      open: "open-lockerroom.png",

      partial: "partial-lockerroom.png",
      forbidden: "forbidden-lockerroom.png",
    },
  },
};

interface ObjectMap {
  [key: string]: string;
}

const translateImageText = (value: string): string => {
  const textAndReplaces: ObjectMap = {
    forbidden: "Fechado",
    recommended: "Recomendado",
    partial: "Parcial",
    required: "Obrigatório",
    open: "Liberado",
  };
  return textAndReplaces[value] ? textAndReplaces[value] : value;
};
export default function LegendICons() {
  return (
    <LegendBox>
      <Flex justifyContent="center">
        <>
          {Object.keys(Legends).map((key) => {
            const item = Legends[key];
            return (
              <FlexItem key={key}>
                <TitleReference>{item.title}</TitleReference>
                <IconList>
                  {Object.keys(item.icons).map((keyIcon, index) => {
                    const imageName = item.icons[keyIcon];
                    const legendIcon = translateImageText(keyIcon);
                    return (
                      <Icon key={Math.random()} size="60px" legend={legendIcon}>
                        <img
                          src={`../../../assets/images/icons/${imageName}`}
                          alt={keyIcon}
                        />
                      </Icon>
                    );
                  })}
                </IconList>
              </FlexItem>
            );
          })}
        </>
      </Flex>
    </LegendBox>
  );
}

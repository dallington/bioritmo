/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";

import styled from "styled-components";

import TemplateDefault from "../../components/templates/Default";

import Units from "../../components/organisms/Units";

import PageHeader from "../../components/molecules/PageHeader";
import FormRadioGroup from "../../components/molecules/Form/FormRadioGroup";
import FormControlLabel from "../../components/molecules/Form/FormControlLabel";

import Flex from "../../components/atoms/Flex";
import Text from "../../components/atoms/Text";
import Radio from "../../components/atoms/FormRadio";

import useFetch from "../../hooks/useFetch";
import LegendIcons from "../../components/molecules/LegendIcons";

import IconHour from "../../assets/images/icons/icon-hour.png";

/* Molecule */
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  border: 8px solid #ededed;
  padding: 40px;
`;

/* Atoms */
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px 32px;
  background-color: ${(props) => props.theme.colors.yellow};
  color: #000;
  border: 0;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin: 20px 0;
  &[disabled] {
    background: #f1f1f1;
    pointer-events: none;
    opacity: 0.3;
  }
`;

const ButtonOutlined = styled.button`
  width: 100%;
  padding: 16px 32px;
  color: #000;
  background: transparent;
  border: 3px solid #ededed;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin: 20px 0;
  &[disabled] {
    background: #f1f1f1;
    pointer-events: none;
    opacity: 0.3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  button {
    flex: 0 1 35%;
  }
`;
const Fieldset = styled.fieldset`
  border: 0;
`;

/* Types */
type Periods = {
  [key: string]: {
    label: string;
    start: string;
    end: string;
  };
};

const periods: Periods = {
  morning: {
    label: "Manhã",
    start: "06:00",
    end: "12:00",
  },
  afternoon: {
    label: "Tarde",
    start: "12:01",
    end: "18:00",
  },
  evening: {
    label: "Noite",
    start: "18:01",
    end: "23:00",
  },
};

function Home() {
  const { data, isLoading, error } = useFetch<any>(
    "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
  );

  const [period, setPeriod] = useState("afternoon");
  const [onlyUnitOpened, setOnlyUnitOpened] = useState(true);
  const [units, setUnits] = useState<any | null>(null);
  const [totalUnits, setTotalUnits] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) setTotalUnits(data.locations.length);
  }, [isLoading]);

  const handlePeriodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    if (value) setPeriod(value);
  };

  const handleGetUnits = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await FilterUnits();
    setLoading(false);
  };

  const handleCleanUnits = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    setUnits(null);
    setTotalUnits(0);
  };

  const extractHoursFromString = (string: string): string[] => {
    const regexp = /[0-9]+/g;
    const arr = Array.from(string.matchAll(regexp), (m) => m[0]);
    return arr;
  };

  const FilterByUnitOpened = () => {
    const { locations } = data;
    const unitsFilter: any = [];
    locations.forEach((unit: any) => {
      if ((onlyUnitOpened && unit.opened && unit.opened === true) === true) {
        return unitsFilter.push(unit);
      }
      return unit;
    });
    setUnits(unitsFilter);
    setTotalUnits(unitsFilter.length);
  };

  const FilterByPeriod = () => {
    const { locations } = data;
    const unitsFilter: any = [];
    const unitsClosed: any = [];
    const myPeriod = periods[period];

    locations.forEach((unit: any) => {
      if (unit.schedules) {
        unit.schedules.forEach((element: any) => {
          const found = unitsFilter.some((el: any) => el.id === unit.id);
          const [start, end] = extractHoursFromString(element.hour);
          if (start?.length === 2 && end?.length === 2) {
            if (
              (start >= myPeriod.start && end <= myPeriod.end) ||
              (start < myPeriod.end && end > myPeriod.end) ||
              (start < myPeriod.start && end > myPeriod.start)
            ) {
              if (!found) unitsFilter.push(unit);
            }
          }
        });
      } else if (onlyUnitOpened === false) {
        if (unit?.open === true) return;

        unitsClosed.push(unit);
      }
    });

    const unitsFiltered = [...unitsFilter, ...unitsClosed];
    setUnits(unitsFiltered);
    setTotalUnits(unitsFiltered.length);
  };

  const FilterUnits = () => {
    if (period) {
      return FilterByPeriod();
    }
    return FilterByUnitOpened();
  };

  return (
    <TemplateDefault>
      <PageHeader title="Reabertura Smart Fit">
        <Text size="25px">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </Text>
      </PageHeader>
      <Card>
        <Flex alignItems="center">
          <img src={IconHour} alt="icon hour" width="30" />
          <Text>Horário</Text>
        </Flex>
        <Form onSubmit={handleGetUnits}>
          <Fieldset>
            <legend>Qual período quer treinar ? </legend>
            <FormRadioGroup aria-label="period">
              {Object.keys(periods).map((item) => {
                const isChecked = item === period;

                const label = (
                  <>
                    <span>{periods[item].label}</span>
                    <span>
                      {periods[item].start} : {periods[item].end}
                    </span>
                  </>
                );
                return (
                  <FormControlLabel label={label} data-period={item} key={item}>
                    <Radio
                      name="period"
                      value={item}
                      checked={!!isChecked}
                      onChange={handlePeriodChange}
                    />
                  </FormControlLabel>
                );
              })}
            </FormRadioGroup>
          </Fieldset>
          <Flex>
            <>
              <div>
                <input
                  type="checkbox"
                  onChange={() => setOnlyUnitOpened(!onlyUnitOpened)}
                />
                Exibir Unidades Fechadas
              </div>
              <Text color="#000">
                Total unidades encontratas <b>{totalUnits}</b>
              </Text>
            </>
          </Flex>
          <ButtonGroup>
            <Button type="submit" disabled={loading}>
              {loading === false ? "Encontrar Unidades" : "Carregando ..."}
            </Button>
            <ButtonOutlined type="button" onClick={handleCleanUnits}>
              Limpar
            </ButtonOutlined>
          </ButtonGroup>
        </Form>
        <LegendIcons />
        {units && units.length && <Units data={units} />}
      </Card>
    </TemplateDefault>
  );
}

export default Home;

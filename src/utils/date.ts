import dayjs from "dayjs";
import { config } from "../../config/config";

export const date = (value: string | undefined, specifiedFormat?: string): string | undefined => {
  if (!value) {
    return undefined;
  }
  const localDateTime = dayjs(value);
  if (!localDateTime.isValid()) {
    return undefined;
  }
  const dateFormat = specifiedFormat || config.format.date;
  return localDateTime.format(dateFormat);
};

export const dateTime = (value: string | undefined, specifiedFormat?: string): string | undefined => {
  if (!value) {
    return undefined;
  }

  const localDateTime = dayjs(value);

  if (!localDateTime.isValid()) {
    return undefined;
  }
  const dateFormat = specifiedFormat || config.format.dateTime;
  return localDateTime.format(dateFormat);
};

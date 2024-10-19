import React from "react";
import { View, Text } from "react-native";

export type Data = {
  id: number;
  view?: React.ComponentType<any>
};

import UploadPic from "./screen/UploadBill";
import PersonSplit from "./screen/PersonSplit";
import MainDetails from "./screen/MainDetails";

export const data: Data[] = [
  {
    id: 1,
    view: UploadPic,
  },
  {
    id: 2,
    view: MainDetails,
  },
  {
    id: 3,
    view: PersonSplit,
  }
];

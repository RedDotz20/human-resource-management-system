import { employeeInterface } from "./employeeInterface";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

export type readQueryType =
	| Dispatch<SetStateAction<employeeInterface[]>>
	| Dispatch<SetStateAction<never[]>>;

export type queryType = FieldValues;

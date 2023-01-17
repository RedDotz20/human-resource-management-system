import { employeeInterface } from "./employeeInterface";
import { Dispatch, SetStateAction } from "react";

export type readQueryType = Dispatch<SetStateAction<employeeInterface[]>>;

export interface queryInterface {
	firstName: string;
	lastName: string;
	age: string;
	sex: string;
	phoneNumber: string;
}

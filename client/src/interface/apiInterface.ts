import { employeeInterface } from "./employeeInterface";
import { Dispatch, SetStateAction } from "react";

// export type readQueryType = Dispatch<
// 	SetStateAction<employeeInterface[]> | SetStateAction<never[]>
// >;

export type readQueryType =
	| Dispatch<SetStateAction<employeeInterface[]>>
	| Dispatch<SetStateAction<never[]>>;

export interface queryInterface {
	firstName: string;
	lastName: string;
	age: string;
	sex: string;
	phoneNumber: string;
}

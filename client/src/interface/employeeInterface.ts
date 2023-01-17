import { Dispatch, SetStateAction } from "react";

export interface employeeInterface {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
	sex: string;
	phoneNumber: string;
}

export interface employeePropsInterface {
	employeeList: employeeInterface[];
}

export interface employeeDataInterface {
	employeeList: employeeInterface[];
	setDeleteId: Dispatch<SetStateAction<number>>;
	setUpdateId: Dispatch<SetStateAction<number>>;
}

export interface searchBarInterface {
	employeeList: employeeInterface[];
	setSearchQuery: Dispatch<SetStateAction<any>>;
}

export interface searchOptionInterface {
	id: number;
	firstName: string;
	lastName: string;
}

export interface FaultDetail {
	errorcode: string;
}

export interface Fault {
	faultstring: string;
	detail: FaultDetail;
}

export interface FaultDto {
	fault: Fault;
}

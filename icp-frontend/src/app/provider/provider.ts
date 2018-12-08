import { Injectable } from '@angular/core';
@Injectable()
export class Provider {
    public apiUrl: any;
    public userData: any = null;
    public token: any = null;
    public rawData: any = null;
    public url: any = "10.150.20.151";
    public gethURL: any = "10.150.20.151"
    public abi: any;
    constructor() {
        this.abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "value",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "string"
                    }
                ],
                "name": "set",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "get",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
        this.apiUrl = {
            login: "https://" + this.url + "/loginsvc/login",
            signup: "https://" + this.url + "/loginsvc/createUser",
            book: "https://" + this.url + "/bookingsvc/book",
            listBookingByUser: "https://" + this.url + "/bookingsvc/listBookingByUser",
            checkin: "https://" + this.url + "/bookingsvc/checkin",
            listFlightsByID: "https://" + this.url + "/listingsvc/listFlights",
            listFlights: "https://" + this.url + "/listingsvc/searchFlights",
            getBlockchain: "https://" + this.url + ":30089/getBlockchain",
            setBlockchain: "https://" + this.url + ":30089/setBlockchain",
            setODM: "https://" + this.url + ":30095/odm",
            postEmail: "https://" + this.url + ":30989/postEmail",
            xrp: "https://localhost:3066/xrp"
        }
    }
}
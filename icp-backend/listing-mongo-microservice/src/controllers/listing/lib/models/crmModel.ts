import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FlightSchema = new Schema({
    ID: {
        type: Number
    },
    Year: {
        type: String
    },
    Month: {
        type: String
    },
    DayofMonth: {
        type: String
    },
    DepDelay: {
        type: String
    },
    CRSDepTime: {
        type: String
    },
    ArrTime: {
        type: String
    },
    CRSArrTime: {
        type: String
    },
    FlightNum: {
        type: String
    },
    TailNum: {
        type: String
    },
    ActualElapsedTime: {
        type: String
    },
    CRSElapsedTime: {
        type: String
    },
    Airtime: {
        type: String
    },
    ArrDelay: {
        type: String
    },
    Origin: {
        type: String
    },
    Dest: {
        type: String
    },
    Distance: {
        type: String
    }
    
});
// all type definitions to be used
// in the code of multiple different areas
import { ObjectId, Collection } from 'mongodb'

export interface Listing {
    _id: ObjectId;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating: number;
}

export interface Database {
    listings: Collection<Listing>;
}
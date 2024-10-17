export default interface Data {
    results: [
        {
            gender:string;
            name:{
                title:string;
                first:string;
                last:string;
            },
            location:{
                city:string;
                country:string;
            },
            email:string;
            phone:number;
            picture:{
                large:string;
            }
        },
    ];
}

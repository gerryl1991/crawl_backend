import {
    CheerioAPI
} from "cheerio";


export function extractHiddenFields(
    $
    :CheerioAPI
){

    const fields:
    Record<string,string> = {};



    $('input[type="hidden"]')
    .each((_,element)=>{


        const name =
            $(element)
            .attr("name");


        const value =
            $(element)
            .attr("value");



        if(name){

            fields[name] =
                value ?? "";

        }


    });



    return fields;

}

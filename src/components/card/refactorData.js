import {data} from "../../store/data";

function refData (data){
    return data.map((el) => {
        return {
            ...el,
            keywords: el.keywords
                .split(' ')
                .filter((item, i, arr) => arr.indexOf(item) === i)
                .join(' '),
        };
    });
}
export const newData =  (refData(data))
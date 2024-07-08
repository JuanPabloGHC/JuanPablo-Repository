
export const useTime = () => {

    const calculateTime = (dateI: Date, dateF: Date) => {

        let years = 0;
        let months = 0;  
        let time = "";
        
        if(dateI.getFullYear() < dateF.getFullYear()) {

            if (dateI.getMonth() <= dateF.getMonth()) { 
                years = dateF.getFullYear() - dateI.getFullYear()
                time += `${years} year${years > 1 ? "s" : ""}`

                if (dateI.getMonth() < dateF.getMonth()) {
                    months = dateF.getMonth() - dateI.getMonth();
    
                    time += ` and ${months} month${months > 1 ? "s" : ""}`
                }
                else if(dateI.getMonth() > dateF.getMonth()) {
                    months = (12 - dateI.getMonth()) + dateF.getMonth();
                    
                    time += ` and ${months} month${months > 1 ? "s" : ""}`
                }
            }
            else {
                months = (12 - dateI.getMonth()) + dateF.getMonth();

                time = `${months} month${months > 1 ? "s" : ""}`
            }

        }
        else {
            months = dateF.getMonth() - dateI.getMonth();

            time = `${months} month${months > 1 ? "s" : ""}`
        }

        return time;
    }

    return {
        calculateTime
    }

}
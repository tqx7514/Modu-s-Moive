const {movietimes} = require("../../models");

exports.postSchedule = async (req, res) => {
    const {
        cinema,
        room,
        seat,
        movie,
        age,
        disp,
        language,
        start,
        end,
        date
    } = req.body;
    console.log('aaaaaaaaaaaaa', cinema);
    try{
        const movietime = movietimes.create({
            cinema: cinema,
            room: room,
            seat: seat,
            movie_name: movie,
            age: age,
            disp: disp,
            language: language,
            start: start,
            end: end,
            date: date
        });
    } catch(e){
        console.error(e)
    }
};

exports.deleteSchedule = async (req, res) => {
    const num = req.body;
    const scheduleNum = Object.keys(num)[0];
    try{
        const delSchedule = await movietimes.destroy({
            where: {movietimes_num: scheduleNum},
        })
    } catch(e){
        console.error(e);
    }
}
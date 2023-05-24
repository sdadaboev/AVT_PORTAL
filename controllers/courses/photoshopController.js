import photoshop from '../../models/courses/photoshop.js'
export const coursePhotoshop = async (req, res, next) => {
    try {
        const allCourses = await photoshop.find()
        console.log(allCourses)
        res.render('my page/photoshopCourses.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}

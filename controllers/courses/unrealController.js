import Courses from '../../models/courses/courses.js'
import unrealEngine from '../../models/courses/unrealEngine.js'
export const coursesUnreal = async (req, res, next) => {
    try {
        const allCourses = await unrealEngine.find()
        console.log(allCourses)
        res.render('my page/unrealCourses.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}

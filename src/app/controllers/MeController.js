const Course = require('../models/Course');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all(([Course.find({}).lean().sortable(req), Course.countDocumentsDeleted().lean(), Course.countDocuments().lean()]))
            .then(([courses, deletedCount, Count]) =>
                res.render('me/stored-courses', {
                    courses,
                    deletedCount,
                    Count,
                })
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Promise.all(([Course.findDeleted({}).lean(), Course.countDocumentsDeleted().lean(), Course.countDocuments().lean()]))
            .then(([courses, deletedCount, Count]) =>
                res.render('me/trash-courses', {
                    courses,
                    deletedCount,
                    Count,
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
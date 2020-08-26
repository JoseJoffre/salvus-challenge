const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error("Invalid ID"));
}

function validPatient(patient) {
    const hasName = typeof patient.name == "string" && patient.name.trim() != "";
    return hasName;
}
router.get("/", (req, res) => {
    queries.getAll().then((patients) => {
        res.json(patients);
    });
});

router.get("/:id", isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then((patient) => {
        if (patient) {
            res.json(patient);
        } else {
            next();
        }
    });
});

router.post("/", (req, res, next) => {
    if (validPatient(req.body)) {
        queries.create(req.body).then((patients) => {
            res.json(patients[0]);
        });
    } else {
        next(new Error("Invalid Patient"));
    }
});

router.put("/:id", isValidId, (req, res, next) => {
    if (validPatient(req.body)) {
        queries.update(req.params.id, req.body).then((patients) => {
            res.json(patients[0]);
        });
    } else {
        next(new Error("Invalid Patient"));
    }
});

router.delete("/:id", isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true,
        });
    });
});

module.exports = router;
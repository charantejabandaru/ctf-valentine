const { Router } = require("express");

const DataService = require("../services/dataservices");

const router = Router({ strict: true });

router.get("/stegno/:input",DataService.stegno);
router.get("/translate/:input",DataService.translate);
router.get("/code/:input",DataService.code);
router.get("/mythology/:input",DataService.mythology);
router.get("/dialogue/:input",DataService.dialogue);
router.get("/logic/:input",DataService.logic);
router.get("/input/:input",DataService.input);

module.exports = router;
import express from 'express';
import * as emiController from '../controllers/emiController.js';

const router = express.Router();

router.post('/', emiController.createEMI);
router.get('/', emiController.getAllEMIs);
router.get('/:id', emiController.getEMIById);
router.put('/:id', emiController.updateEMI);
router.delete('/:id', emiController.deleteEMI);

export default router;
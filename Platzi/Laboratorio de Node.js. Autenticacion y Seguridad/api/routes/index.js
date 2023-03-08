import { Router } from 'express';

import { deleteUser } from './delete-profile.route.js';
import { viewUser } from './view-profile.route.js';
import { updateUser } from './update-profile.route.js';

export const profile = Router();

profile.use('/', viewUser);
profile.use('/', deleteUser);
profile.use('/', updateUser);

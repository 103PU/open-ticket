///////////////////////////////////////
//OPEN TICKET TASK MAPPINGS
///////////////////////////////////////
import * as api from "@open-discord-bots/framework/api"

/**## ODTaskManagerIdMappings `interface`
 * A list of all available IDs in the default `ODTaskManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODTaskManagerIdMappings extends api.ODTaskManagerIdConstraint {
    "opendiscord:command-error-handling":api.ODTask,
    "opendiscord:start-listening-interactions":api.ODTask,
    "opendiscord:panel-database-cleaner":api.ODTask,
    "opendiscord:suffix-database-cleaner":api.ODTask,
    "opendiscord:option-database-cleaner":api.ODTask,
    "opendiscord:user-database-cleaner":api.ODTask,
    "opendiscord:ticket-database-cleaner":api.ODTask,
    "opendiscord:transcript-database-cleaner":api.ODTask,
    "opendiscord:panel-auto-update":api.ODTask,
    "opendiscord:ticket-saver":api.ODTask,
    "opendiscord:blacklist-saver":api.ODTask,
    "opendiscord:auto-role-on-join":api.ODTask,
    "opendiscord:autoclose-timeout":api.ODTask,
    "opendiscord:autoclose-leave":api.ODTask,
    "opendiscord:autodelete-timeout":api.ODTask,
    "opendiscord:autodelete-leave":api.ODTask,
    "opendiscord:ticket-anti-busy":api.ODTask,
}

/////////////////////////////
////// MAPPED MANAGERS //////
/////////////////////////////

/**## ODMappedTaskManager `class
 * A special class with types for the Open Ticket `ODTaskManager` class.
 */
export class ODMappedTaskManager extends api.ODTaskManager<ODTaskManagerIdMappings> {}
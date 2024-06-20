/**
 * Index specific events.
 */
export enum IndexEventName {
  // UI
  SubmitCreateIndex = 'Submit Create Index',
  SubmitUpdateIndex = 'Submit Update Index',
  SubmitDeleteIndex = 'Submit Delete Index',

  IndexFilter = 'Index Filter',
  ShareIndex = 'Share Index',

  // API
  IndexCreated = 'Index Created',
  IndexUpdated = 'Index Updated',
  IndexDeleted = 'Index Deleted',
}

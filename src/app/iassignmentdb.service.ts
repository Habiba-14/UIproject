import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class IassignmentdbService {

  constructor(private db: AngularFireDatabase) { }

  updateAssignment(assignmentId: string, updatedAssignment: any): Promise<void> {
    const assignmentRef = this.db.object(`assignments/${assignmentId}`);
    return assignmentRef.update(updatedAssignment);
  }

}

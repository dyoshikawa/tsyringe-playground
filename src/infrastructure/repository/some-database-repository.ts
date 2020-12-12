import { injectable } from 'tsyringe'
import { SomeRepository } from '../../domain/repository/some-repository'

@injectable()
export class SomeDatabaseRepository implements SomeRepository {
  constructor() {}
  findSome(): string {
    return 'something'
  }
}

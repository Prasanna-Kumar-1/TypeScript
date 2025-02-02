//read only applies to premative types
type User = {
  readonly id: number;
  username: string;
};
//correct
const user: User = {
  id: 1,
  username: "john",
};
//incorrect
user.id = 2; //Cannot assign to 'id' because it is a read-only property.

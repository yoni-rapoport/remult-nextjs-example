import { Entity, Field } from "remult"

@Entity("users")
export class User {
    @Field({ valueType: Number })
    id: number
    @Field({ valueType: String })
    name: string
}

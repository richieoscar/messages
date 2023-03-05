import { IsNotEmpty, IsString } from "class-validator";

export class MessageRequest {
   @IsString()
   @IsNotEmpty()
   private title: string;

   @IsString()
   @IsNotEmpty()
    body: string


   getBody():string{
      return this.body
   }
}
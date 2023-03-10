import {
  Controller, //"nest g co" in terminal
  Get,
  Param, //Param allows us to grab all incoming request paramters and use them inside function body of our method
  Post,
  Body,
  // HttpCode,
  // HttpStatus,
  // Res,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    // response.status(200).send('This action returns all the coffees');
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  }
  //Reading
  // @Get(':id') //":id" signifies a dynamic route parameter named id
  // findOne(@Param('id') id: string) {
  //   return `This action returns #${id} coffee`;
  // }

  // To get all or portions of a request body / Creating
  @Post()
  //
  // @HttpCode(HttpStatus.GONE)
  // Can run into validation issues when accessing only portions of Body. Cannot validate other properties when accessing a specific property
  create(@Body() body) {
    return body;
  }
  //Update - Put replaces entire resource - entire object must be in request payload /&/ Patch - only partially modifies resource
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }
  //Delete
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}

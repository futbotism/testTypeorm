import { Module } from '@nestjs/common';

import { EntriesModule } from './entries/entries.module';
import { UserModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { PatternModule } from './pattern/pattern.module';
@Module({
    modules: [
        EntriesModule,
        UserModule,
        CategoriesModule,
        AuthModule,
        PatternModule
    ],
})

export class ApplicationModule { }
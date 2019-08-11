import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root',
    useClass: LocalStorageService
})
export abstract class Storage {
    abstract getItem(key: string): string;
    abstract setItem(key: string, value: string): void;
    abstract removeItem(key: string): void;
}
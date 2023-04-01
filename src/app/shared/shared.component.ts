import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss']
})
export class SharedComponent {

    public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
    ];
    public dataSource = new MatTableDataSource<Test>();
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor() { }

    ngOnInit() {
        this.getAllOwners();
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    public getAllOwners = () => {
        this.dataSource.data = [
            {
                id: "1",
                name: 'John Doe',
                dateOfBirth: new Date('1990-05-15'),
                address: '123 Main St, Anytown USA'
            },
            {
                id: "2",
                name: 'Jane Smith',
                dateOfBirth: new Date('1985-09-21'),
                address: '456 Park Ave, Anycity USA'
            },
            {
                id: "3",
                name: 'Bob Johnson',
                dateOfBirth: new Date('1978-03-08'),
                address: '789 Elm St, Anyvillage USA'
            },
            {
                id: "4",
                name: 'Mary Brown',
                dateOfBirth: new Date('1995-12-02'),
                address: '234 Pine St, Anyhamlet USA'
            },
            {
                id: "5",
                name: 'Tom Wilson',
                dateOfBirth: new Date('1982-06-12'),
                address: '567 Oak St, Anyborough USA'
            }
        ] as Test[];
    }

    public redirectToDetails = (id: string) => {

    }

    public redirectToUpdate = (id: string) => {

    }

    public redirectToDelete = (id: string) => {

    }

    public doFilter = (event: any) => {
        this.dataSource.filter = event?.target?.value.trim().toLocaleLowerCase();
    }

    pageChanged(event:any) {
        
    }

}

export interface Test {
    id: string;
    name: string;
    dateOfBirth: Date;
    address: string;
}
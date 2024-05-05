<template>
  <SimpleContainer class="d-flex justify-center ">
    <SimpleProgressCircular
      :size="100"
      v-if="isLoading"
    />
    <SimpleRow v-else>
      <SimpleCol md="6" cols="12">
        <DataTable
          fixed-header
          :list="bids"
          :headers="headers"
          class="order-table"
        >

          <template #price="{item}">
            <DataTableTd>
              {{item}}
            </DataTableTd>
          </template>

          <template #quantity="{item}">
            <DataTableTd>
              {{item}}
            </DataTableTd>
          </template>

          <template #total="{data}">
            <DataTableTd>
              {{getTotal(data)}}
            </DataTableTd>
          </template>

          <template #bottom>
            <SimpleRow no-gutters class="pa-2 border-t justify-end">
              <SimpleCol cols="2" >
                <SimpleSelect
                  density="compact"
                  hide-details
                  :items="limitsList"
                  v-model="limit"
                />
              </SimpleCol>
            </SimpleRow>
          </template>
        </DataTable>
      </SimpleCol>

      <SimpleCol md="6" cols="12">
        <DataTable
          fixed-header
          :list="asks"
          :headers="headers"
          class="order-table"
        >

          <template #price="{item}">
            <DataTableTd>
              {{item}}
            </DataTableTd>
          </template>

          <template #quantity="{item}">
            <DataTableTd>
              {{item}}
            </DataTableTd>
          </template>

          <template #total="{data}">
            <DataTableTd>
              {{getTotal(data)}}
            </DataTableTd>
          </template>

          <template #bottom>
            <SimpleRow no-gutters class="pa-2 border-t justify-end">
              <SimpleCol cols="2" >
                <SimpleSelect
                  density="compact"
                  hide-details
                  :items="limitsList"
                  v-model="limit"
                />
              </SimpleCol>
            </SimpleRow>
          </template>
        </DataTable>
      </SimpleCol>
    </SimpleRow>
  </SimpleContainer>
</template>
<script setup>
import {SimpleContainer} from "@/components/ui/facades/simpleContainer";
import {SimpleRow} from "@/components/ui/facades/simpleRow";
import {SimpleCol} from "@/components/ui/facades/simpleCol";
import {getTotal} from "./model/getTotal";
import './style/index.scss'
import {DataTable, DataTableTd} from "@/components/widgets/table";
import {useData} from "./model/useData";
import {useOrderBook} from "@/stores/orderBook";
import {SimpleSelect} from "@/components/ui/facades/simpleSelect";
import {limitsList} from './model/limitsList'
import {SimpleProgressCircular} from "@/components/ui/facades/simpleProgressCircular";

const headers = [
  {title: 'Price', key: 'price'},
  {title: 'Quantity', key: 'quantity'},
  {title: 'Total(Price * Quantity)', key: 'total'},
]
const orderBookStore = useOrderBook()
const {
  asks,
  bids,
  isLoading,
  limit
} = useData(orderBookStore)
</script>

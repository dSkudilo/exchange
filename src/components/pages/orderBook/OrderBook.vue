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
          :headers="bidsTableHeaders"
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
                  :items="LIMIT_LIST"
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
          :headers="asksTableHeaders"
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
                  :items="LIMIT_LIST"
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
import {SimpleProgressCircular} from "@/components/ui/facades/simpleProgressCircular";
import {useCurrency} from "@/stores/currency";
import {LIMIT_LIST} from "@/constants/OREDER_BOOK";
import {useTableHeaders} from "./model/useTableHeaders";

const storeOrderBook = useOrderBook()
const  storeCurrency = useCurrency()
const {
  asks,
  bids,
  isLoading,
  limit
} = useData(storeOrderBook, storeCurrency)

const {
  bidsTableHeaders,
  asksTableHeaders
} = useTableHeaders()
</script>

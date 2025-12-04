import { Editable, IndentedType, TableType } from "@/constants/Blogs/blog"
import { defaultParagraph } from "@/constants/Blogs/allBlogs"
import { paragraphOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"
import { CrossCircledIcon, Pencil2Icon } from "@radix-ui/react-icons"
import { ArrowDownIcon, ArrowUpIcon, ChevronRightIcon, PlusIcon, XIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { BlogParagraph } from "./BlogParagraph"
import { BlogOption } from "./BlogOption"

export const BlogTable: React.FC<TableType & IndentedType & Editable> = ({
  headers, 
  rows, 
  caption, 
  headerStyle,
  cellStyle,
  indented=false, 
  editable=false, 
  onEdit=()=>{}, 
  deleteComponent=()=>{}, 
  moveDown=()=>{}, 
  moveUp=()=>{}
}) => {

  const tableCaption = caption || {...defaultParagraph, text: ""}
  const tableHeaderStyle = headerStyle || {
    alignment: "CENTER" as const,
    size: "BASE" as const,
    weight: "BOLD" as const,
    style: "NONE" as const,
  }
  const tableCellStyle = cellStyle || {
    alignment: "LEFT" as const,
    size: "BASE" as const,
    weight: "NORMAL" as const,
    style: "NONE" as const,
  }

  const [opened, setOpened] = useState(false)
  const [settingsMode, setSettingsMode] = useState<"header" | "cell" | "caption">("cell")

  const current: TableType & IndentedType = {
    type: "TABLE",
    headers,
    rows,
    caption: tableCaption,
    headerStyle: tableHeaderStyle,
    cellStyle: tableCellStyle,
    indented
  }

  // Get Tailwind classes for header
  const headerSizeClass = getTailwind(paragraphOptions, "Font Size", tableHeaderStyle.size)
  const headerWeightClass = getTailwind(paragraphOptions, "Font Weight", tableHeaderStyle.weight)
  const headerStyleClass = getTailwind(paragraphOptions, "Font Style", tableHeaderStyle.style)
  const headerAlignClass = getTailwind(paragraphOptions, "Text Alignment", tableHeaderStyle.alignment)

  // Get Tailwind classes for cells
  const cellSizeClass = getTailwind(paragraphOptions, "Font Size", tableCellStyle.size)
  const cellWeightClass = getTailwind(paragraphOptions, "Font Weight", tableCellStyle.weight)
  const cellStyleClass = getTailwind(paragraphOptions, "Font Style", tableCellStyle.style)
  const cellAlignClass = getTailwind(paragraphOptions, "Text Alignment", tableCellStyle.alignment)

  const captionSizeClass = getTailwind(paragraphOptions, "Font Size", tableCaption.size)
  const captionWeightClass = getTailwind(paragraphOptions, "Font Weight", tableCaption.weight)
  const captionStyleClass = getTailwind(paragraphOptions, "Font Style", tableCaption.style)
  const captionAlignClass = getTailwind(paragraphOptions, "Text Alignment", tableCaption.alignment)

  const addColumn = () => {
    onEdit({
      ...current,
      headers: [...headers, `Column ${headers.length + 1}`],
      rows: rows.map(row => [...row, ""])
    })
  }

  const addRow = () => {
    onEdit({
      ...current,
      rows: [...rows, Array(headers.length).fill("")]
    })
  }

  const deleteColumn = (colIndex: number) => {
    onEdit({
      ...current,
      headers: headers.filter((_, i) => i !== colIndex),
      rows: rows.map(row => row.filter((_, i) => i !== colIndex))
    })
  }

  const deleteRow = (rowIndex: number) => {
    onEdit({
      ...current,
      rows: rows.filter((_, i) => i !== rowIndex)
    })
  }

  return (
    <>
      {editable ? 
      <div className={`relative group/parent flex flex-col gap-2 ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        
        {/* Edit/Close Button */}
        <div className="absolute p-1 bg-neutral-50 shadow-md z-10 rounded-md translate-x-1/2 -translate-y-1/2 top-0 right-0" onClick={() => setOpened(!opened)}>
          {opened ? <CrossCircledIcon className="size-6" /> : <Pencil2Icon className="size-6" />}
        </div>

        {/* Side Controls */}
        <div className={`absolute px-2 left-0 top-0 bottom-0 -translate-x-full overflow-hidden transition-all duration-300 group-hover/parent:w-20 min-h-40 ${opened ? "w-20" : "w-0"}`}>
          <Card className="size-full flex flex-col justify-center py-6 gap-4 border-0 group-hover/parent:border items-center overflow-hidden text-neutral-400">
            <Button onClick={() => moveUp()} size={"icon"} variant={"ghost"}>
              <ArrowUpIcon className="size-6 hover:text-neutral-700" />
            </Button>
            <Button onClick={() => onEdit({...current, indented: !current.indented})} size={"icon"} variant={"ghost"}>
              <ChevronRightIcon className={`size-6 hover:text-neutral-700 transition-transform duration-150 ${current.indented ? "rotate-180" : ""}`} />
            </Button>
            <Button onClick={() => moveDown()} size={"icon"} variant={"ghost"}>
              <ArrowDownIcon className="size-6 hover:text-neutral-700" />
            </Button>
          </Card>
        </div>

        {/* Top Options Bar */}
        <div className={`overflow-hidden border-0 flex p-0 justify-between items-center absolute h-0 w-full transition-all duration-200 top-0 -translate-y-full ${opened ? "py-2 h-32" : "p-0 border-0 h-0"}`}>
          <Card className="size-full flex justify-between items-center p-4">
            <div className="flex gap-2">
              <Button size={"icon"} variant={"ghost"} onClick={() => deleteComponent()}>
                <XIcon className="size-4"/>
              </Button>
              <p className="text-3xl text-light-black">
                {settingsMode === "header" ? "Table Headers" : settingsMode === "cell" ? "Table Cells" : "Table Caption"}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              {settingsMode === "caption" ? (
                <>
                  {paragraphOptions.map(option => 
                    <BlogOption key={option.JSONkey} 
                      {...option} 
                      value={(tableCaption as unknown as Record<string, string>)[option.JSONkey]}
                      onChange={(value) => onEdit({...current, caption: {...tableCaption, [option.JSONkey]: value}})}
                    />
                  )}
                </>
              ) : settingsMode === "header" ? (
                <>
                  {paragraphOptions.map(option => 
                    <BlogOption key={option.JSONkey} 
                      {...option} 
                      value={(tableHeaderStyle as unknown as Record<string, string>)[option.JSONkey]}
                      onChange={(value) => onEdit({...current, headerStyle: {...tableHeaderStyle, [option.JSONkey]: value}})}
                    />
                  )}
                </>
              ) : (
                <>
                  {paragraphOptions.map(option => 
                    <BlogOption key={option.JSONkey} 
                      {...option} 
                      value={(tableCellStyle as unknown as Record<string, string>)[option.JSONkey]}
                      onChange={(value) => onEdit({...current, cellStyle: {...tableCellStyle, [option.JSONkey]: value}})}
                    />
                  )}
                </>
              )}
              <Button onClick={() => setSettingsMode(settingsMode === "cell" ? "header" : settingsMode === "header" ? "caption" : "cell")} size={"icon"} variant={"ghost"}>
                <ChevronRightIcon className="size-6"/>
              </Button>
            </div>
          </Card>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-neutral-300">
            <thead className="bg-neutral-100">
              <tr>
                {headers.map((header, i) => (
                  <th key={`header-${i}`} className="border border-neutral-300 p-2 relative group/header">
                    <Input 
                      value={header} 
                      onChange={(e) => onEdit({
                        ...current,
                        headers: [...headers.slice(0, i), e.target.value, ...headers.slice(i+1)]
                      })}
                      className={`${headerSizeClass} ${headerWeightClass} ${headerStyleClass} ${headerAlignClass}`}
                    />
                    {headers.length > 1 && (
                      <Button 
                        onClick={() => deleteColumn(i)} 
                        variant={"destructive"} 
                        size={"icon"} 
                        className="absolute -top-2 -right-2 hidden group-hover/header:flex size-6"
                      >
                        <XIcon className="size-3" />
                      </Button>
                    )}
                  </th>
                ))}
                <th className="border border-neutral-300 p-2 bg-neutral-50">
                  <Button onClick={addColumn} size={"icon"} variant={"ghost"}>
                    <PlusIcon className="size-4" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`} className="group/row">
                  {row.map((cell, cellIndex) => (
                    <td key={`cell-${rowIndex}-${cellIndex}`} className="border border-neutral-300 p-2">
                      <Input 
                        value={cell}
                        onChange={(e) => {
                          const newRows = [...rows]
                          newRows[rowIndex][cellIndex] = e.target.value
                          onEdit({...current, rows: newRows})
                        }}
                        className={`${cellSizeClass} ${cellWeightClass} ${cellStyleClass} ${cellAlignClass}`}
                      />
                    </td>
                  ))}
                  <td className="border border-neutral-300 p-2 bg-neutral-50">
                    {rows.length > 1 && (
                      <Button 
                        onClick={() => deleteRow(rowIndex)} 
                        variant={"ghost"} 
                        size={"icon"}
                        className="opacity-0 group-hover/row:opacity-100"
                      >
                        <XIcon className="size-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={headers.length + 1} className="border border-neutral-300 p-2 text-center bg-neutral-50">
                  <Button onClick={addRow} variant={"secondary"}>
                    Add Row <PlusIcon className="size-4 ml-2" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Caption */}
        <Input 
          placeholder="Table Caption (optional)" 
          value={caption?.text} 
          onChange={(e) => onEdit({...current, caption: {...tableCaption, text: e.target.value}})}
          className={`${captionSizeClass} ${captionWeightClass} ${captionStyleClass} ${captionAlignClass}`}
        />
      </div>
      : 
      <div className={`flex flex-col gap-2 ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-neutral-300">
            <thead className="bg-neutral-100">
              <tr>
                {headers.map((header, i) => (
                  <th key={`header-${i}`} className={`border border-neutral-300 p-2 ${headerSizeClass} ${headerWeightClass} ${headerStyleClass} ${headerAlignClass}`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`cell-${rowIndex}-${cellIndex}`} className={`border border-neutral-300 p-2 ${cellSizeClass} ${cellWeightClass} ${cellStyleClass} ${cellAlignClass}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {caption && caption.text && <BlogParagraph indented={false} {...caption} />}
      </div>}
    </>
  )
}